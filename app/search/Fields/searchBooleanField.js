"use strict";

const SearchField = require("./common/searchField");

class SearchBooleanField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchBooleanField";
    }

    _getAttributes() {
        // operator is not needed
        return {
            "xsi:type": `${this._type}:${this._name}`,
        };
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
        node[type]["platformCore:searchValue"]["$attributes"][this.field] = this.searchValue;
        return node;
    }
}

module.exports = SearchBooleanField;
