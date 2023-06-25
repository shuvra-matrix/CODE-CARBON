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
  res.render("public/index.ejs", {
    code: code,
    theme: theme,
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

  res.render("public/index.ejs", {
    code: code,
    theme: theme,
  });
};

exports.postTheme = (req, res, next) => {
  let code;
  if (req.session.code) {
    code = req.session.code;
  } else {
    code = DEFULTCODE;
  }

  const theme = req.body.theme;
  req.session.theme = theme;

  res.render("public/index.ejs", {
    code: code,
    theme: theme,
  });
};
