module.exports= function(broswer){
    this.clickUser='xpath';
    this.clickUserTap=function(xpath){
        broswer
        .click(this.clickUser, xpath);
    }
}