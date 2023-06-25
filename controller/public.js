const DEFULTCODE = `import SwiftUI

struct CircleImage: View {
  var body: some View {
    Image("turtlerock")
      .clipShape(Circle())
  }
}`;

exports.getIndex = (req, res, next) => {
  let code;
  let theme;
  if (req.session.code) {
    code = req.session.code;
  } else {
    code = DEFULTCODE;
  }
  if (req.session.theme) {
    theme = req.session.theme;
  } else {
    theme = "soft-purple";
  }
  let displayMode;
  if (req.session.displayMode) {
    displayMode = req.session.displayMode;
  } else {
    displayMode = "";
  }
  let background;
  if (req.session.background) {
    background = req.session.background;
  } else {
    background = "";
  }
  res.render("public/index.ejs", {
    code: code,
    theme: theme,
    displayMode: displayMode,
    background: background,
  });
};

exports.postCode = (req, res, next) => {
  const code = req.body.code.split("     ");
  console.log(code);
  req.session.code = code;
  let theme;
  if (req.session.theme) {
    theme = req.session.theme;
  } else {
    theme = "soft-purple";
  }
  let displayMode;
  if (req.session.displayMode) {
    displayMode = req.session.displayMode;
  } else {
    displayMode = "";
  }
  let background;
  if (req.session.background) {
    background = req.session.background;
  } else {
    background = "";
  }

  res.render("public/index.ejs", {
    code: code,
    theme: theme,
    displayMode: displayMode,
    background: background,
  });
};

exports.postTheme = (req, res, next) => {
  let code;
  if (req.session.code) {
    code = req.session.code;
  } else {
    code = DEFULTCODE;
  }
  let displayMode;
  if (req.session.displayMode) {
    displayMode = req.session.displayMode;
  } else {
    displayMode = "";
  }
  let background;
  if (req.session.background) {
    background = req.session.background;
  } else {
    background = "";
  }
  const theme = req.body.theme;
  req.session.theme = theme;

  res.render("public/index.ejs", {
    code: code,
    theme: theme,
    displayMode: displayMode,
    background: background,
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
  let code;
  if (req.session.code) {
    code = req.session.code;
  } else {
    code = DEFULTCODE;
  }
  let theme;
  if (req.session.theme) {
    theme = req.session.theme;
  } else {
    theme = "soft-purple";
  }
  let background;
  if (req.session.background) {
    background = req.session.background;
  } else {
    background = "";
  }
  res.render("public/index.ejs", {
    code: code,
    theme: theme,
    displayMode: req.session.displayMode,
    background: background,
  });
};

exports.postBackground = (req, res, next) => {
  const background = req.body.theme;
  console.log(background);
  if (req.session.background) {
    console.log("hiiii");
    if (req.session.background == "transparent") {
      req.session.background = "";
    } else {
      req.session.background = background;
    }
  } else {
    req.session.background = background;
  }

  if (req.session.code) {
    code = req.session.code;
  } else {
    code = DEFULTCODE;
  }
  let theme;
  if (req.session.theme) {
    theme = req.session.theme;
  } else {
    theme = "soft-purple";
  }
  let displayMode;
  if (req.session.displayMode) {
    displayMode = req.session.displayMode;
  } else {
    displayMode = "";
  }

  res.render("public/index.ejs", {
    code: code,
    theme: theme,
    displayMode: displayMode,
    background: req.session.background,
  });
};
