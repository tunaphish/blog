const slugify = require("slugify")
module.exports = title => `/note/${slugify(title)}`