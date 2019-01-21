"use strict";

const SearchField = require("./common/searchField");

class SearchMultiSelectCustomField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchMultiSelectField";
        this.internalId = "internalId";
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        if (!this.field) {
            throw new Error("search criteria field not set");
        }

        if (!this.operator) {
            throw new Error("search criteria operator not set");
        }

        if (!this.searchValue) {
            throw new Error("search criteria searchValue not set");
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        node[type]["platformCore:searchValue"] = {};
        node[type]["platformCore:searchValue"]["$attributes"] = {};
        node[type]["platformCore:searchValue"]["$attributes"][this.internalId] = this.searchValue;

        return node;
    }


}

module.exports = SearchMultiSelectCustomField;
