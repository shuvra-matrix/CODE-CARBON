exports.getIndex = (req, res, next) => {
  res.render("public/index.ejs", {
    code: `import SwiftUI

struct CircleImage: View {
  var body: some View {
    Image("turtlerock")
      .clipShape(Circle())
  }
}`,
  });
};

exports.postCode = (req, res, next) => {
  const code = req.body.code.split("     ");
  console.log(code);
  res.render("public/index.ejs", {
    code: code,
  });
};
