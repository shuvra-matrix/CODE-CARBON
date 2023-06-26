const DEFULTCODE = `
#include <iostream>
using namespace std;

int main() {
 char c;
 cout << "Enter a character: ";
 cin >> c;
 cout << "ASCII Value of " << c << " is " << int(c);
 return 0;
}
`;

const codeCheck = (req) => {
  if (req.session.code) {
    return req.session.code;
  } else {
    return DEFULTCODE;
  }
};

const themeCheck = (req) => {
  if (req.session.theme) {
    return req.session.theme;
  } else {
    return "soft-purple";
  }
};

const displayModeCheck = (req) => {
  if (req.session.displayMode) {
    return req.session.displayMode;
  } else {
    return "";
  }
};

const backgroundCheck = (req) => {
  if (req.session.background) {
    return req.session.background;
  } else {
    return "";
  }
};

const paddingCheck = (req) => {
  let padding;
  if (req.session.padding) {
    padding = req.session.padding;
  } else {
    padding = "30";
  }
  return padding;
};

exports.getIndex = (req, res, next) => {
  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: themeCheck(req),
    displayMode: displayModeCheck(req),
    background: backgroundCheck(req),
    padding: paddingCheck(req),
  });
};

exports.postCode = (req, res, next) => {
  console.log(req.user);
  const code = req.body.code;
  req.user[0]
    .addCode({ code })
    .then((result) => {
      console.log("Done");
    })
    .catch((err) => {
      console.log(err);
    });

  req.session.code = code;

  res.render("public/index.ejs", {
    code: code,
    theme: themeCheck(req),
    displayMode: displayModeCheck(req),
    background: backgroundCheck(req),
    padding: paddingCheck(req),
  });
};

exports.postTheme = (req, res, next) => {
  const theme = req.body.theme;
  req.session.theme = theme;

  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: theme,
    displayMode: displayModeCheck(req),
    background: backgroundCheck(req),
    padding: paddingCheck(req),
  });
};

exports.postDisplaymode = (req, res, next) => {
  const displayMode = req.body.theme;
  if (req.session.displayMode) {
    if (req.session.displayMode == "light-mode") {
      req.session.displayMode = "";
    } else {
      req.session.displayMode = displayMode;
    }
  } else {
    req.session.displayMode = displayMode;
  }

  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: themeCheck(req),
    displayMode: req.session.displayMode,
    background: backgroundCheck(req),
    padding: paddingCheck(req),
  });
};

exports.postBackground = (req, res, next) => {
  const background = req.body.theme;
  if (req.session.background) {
    if (req.session.background == "transparent") {
      req.session.background = "";
    } else {
      req.session.background = background;
    }
  } else {
    req.session.background = background;
  }

  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: themeCheck(req),
    displayMode: displayModeCheck(req),
    background: req.session.background,
    padding: paddingCheck(req),
  });
};

exports.postPadding = (req, res, next) => {
  const padding = req.body.padding;
  req.session.padding = padding;
  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: themeCheck(req),
    background: backgroundCheck(req),
    displayMode: displayModeCheck(req),
    padding: padding,
  });
};
