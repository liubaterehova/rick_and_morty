import React, { Component } from "react";
import { Input } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { withTranslation } from "react-i18next";
const { Search } = Input;

class SearchPanel extends Component {
  render() {
    const { t } = this.props;
    return (
      <Search
        placeholder={t("common:searchTextPlaceholder")}
        enterButton={t("common:searchTextButton")}
        size="large"
        onSearch={value => this.props.changeSearchText(value)}
        style={{ width: "300px", margin: "30px" }}
      />
    );
  }
}
export default withTranslation()(SearchPanel);
