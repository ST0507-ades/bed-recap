const { query } = require('../database');
const {
    DUPLICATE_ENTRY_ERROR,
    EMPTY_RESULT_ERROR,
    MYSQL_ERROR_CODE,
    TABLE_ALREADY_EXISTS_ERROR,
} = require('../errors');

module.exports.initTable = function initTable() {
    const sql = `CREATE TABLE modules_tab (
        id INT auto_increment primary key,
        code VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        credit DECIMAL(2,1) NOT NULL
    )`;
    return query(sql).catch(function (error) {
        if (error.errno === MYSQL_ERROR_CODE.TABLE_ALREADY_EXISTS) {
            throw new TABLE_ALREADY_EXISTS_ERROR(`modules_tab`);
        }
        throw error;
    });
};

module.exports.create = function create(code, name, credit) {
    const sql = `INSERT INTO modules_tab (code, name, credit) VALUES (?, ?, ?)`;
    return query(sql, [code, name, credit]).catch(function (error) {
        if (error.errno === MYSQL_ERROR_CODE.DUPLICATE_ENTRY) {
            throw new DUPLICATE_ENTRY_ERROR(`Module ${code} already exists`);
        }
        throw error;
    });
};

module.exports.retrieveByCode = function retrieveByCode(code) {
    const sql = `SELECT * FROM modules_tab WHERE code = ?`;
    return query(sql, [code]).then(function (result) {
        const rows = result[0];
        if (rows.length === 0) {
            throw new EMPTY_RESULT_ERROR(`Module ${code} not found!`);
        }
        return rows[0];
    });
};

module.exports.deleteByCode = function deleteByCode(code) {
    // TODO implement delete by code
};

module.exports.updateByCode = function updateByCode(code, credit) {
    // TODO implement update by code
};

module.exports.retrieveAll = function retrieveAll() {
    // TODO implement retrieve all
};

module.exports.retrieveBulk = function retrieveAll(codes) {
    // TODO implement bulk retrieve
};

module.exports.createBulk = function retrieveAll(newModules) {
    // TODO implement bulk create
};

module.exports.deleteBulk = function retrieveAll(codes) {
    // TODO implement bulk delete
};
