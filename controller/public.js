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

exports.getIndex = (req, res, next) => {
  res.render("public/index.ejs", {
    code: codeCheck(req),
    theme: themeCheck(req),
    displayMode: displayModeCheck(req),
    background: backgroundCheck(req),
  });
};

exports.postCode = (req, res, next) => {
  const code = req.body.code.split("     ");
  req.session.code = code;

  res.render("public/index.ejs", {
    code: code,
    theme: themeCheck(req),
    displayMode: displayModeCheck(req),
    background: backgroundCheck(req),
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
  });
};

exports.postExports = (req, res, next) => {
  const imageSection = req.body.codeImageSection;
  console.log(imageSection);
};
