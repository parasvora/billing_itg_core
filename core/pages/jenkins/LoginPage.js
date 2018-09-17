/**
 * Created by paras.vora on 07-Sep-18
 */
async function signIn(username, password){
    const user = "input[id='j_username']";
    await page.waitForSelector(user);
    await page.type(user, username);
    await page.type("input[name='j_password']", password);
    await page.click("input[name='Submit']");
}

module.exports = { signIn };