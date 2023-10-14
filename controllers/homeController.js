
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}
let getAboutPage = (req, res) => {
    return res.render('test/aboutpage.ejs')
}

// Object:{
//     Key
//     value
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}