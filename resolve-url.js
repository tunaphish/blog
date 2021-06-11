const slugify = require("slugify")
module.exports = title => `/constellation/${slugify(title)}`