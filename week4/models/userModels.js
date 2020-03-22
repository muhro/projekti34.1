const getUserLogin = async (params) => {
    try {
        console.log(params);
        const [rows] = await promisePool.execute(
            'SELECT * FROM wop_user WHERE email = ?;',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
};
/*
module.exports = {
    getUserLogin,
};
*/