import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Table as TableBase } from "@test";
import { CheckBox } from "../Form";
import { ControllSwitchHoc } from "wowjoy-component/es/tools";
const Wrap = styled(TableBase)`
  width: 100%;
  text-align: left;
  border: none;
  th,
  td {
    padding: 12px 4px;
    border: none;
  }
  & > thead {
    font-size: 14px;
    color: #333;
    & > tr {
      background: #eee;
    }
  }
  & > tbody {
    font-size: 12px;
    color: #666;
    & > tr {
      transition: 0.3s;
      &:nth-child(odd) {
        background: #fff;
      }
      &:nth-child(even) {
        background: #f5f5f5;
      }
      &:hover {
        background: #fffbe0;
      }
    }
  }
`;
class Table extends PureComponent {
  onSelectedChange = (rowEle, rowIndex) => e => {
    const { onChange, value = [] } = this.props;
    if (rowEle instanceof Array) {
      onChange(rowEle.map(ele => ele.id), "all", -1, e);
      return;
    }
    const toggleArr = (arr, item) => {
      if (arr.includes(item)) {
        return arr.filter(ele => ele !== item);
      }
      return [...arr, item];
    };
    onChange(toggleArr(value, rowEle.id), rowEle, rowIndex, e);
  };

  addColumns = columns => {
    const { value = [], page, pageSize, data } = this.props;
    const sliceData =
      page && size
        ? data.slice(page * pageSize, page * pageSize + pageSize)
        : data;
    const fullSelect = (() => {
      if (value.length === 0) {
        return false;
      }

      if (sliceData.some(ele => !value.includes(ele.id))) {
        return "half-active";
      }
      return true;
    })();
    return [
      ...{
        title: (
          <CheckBox
            value={fullSelect}
            onChange={this.onSelectedChange(
              fullSelect === true ? [] : sliceData
            )}
          />
        ),
        render: (rowEle, rowIndex) => (
          <CheckBox
            onChange={this.onSelectedChange(rowEle, rowIndex)}
            value={value.includes(rowEle.id)}
          />
        ),
        id: "checkBox"
      },
      ...columns
    ];
  };
  render() {
    const {
      className,
      defaultStyles,
      children,
      data,
      columns,
      selection = true,
      filter
    } = this.props;

    return (
      <Wrap
        defaultStyles={defaultStyles}
        className={className}
        data={data}
        columns={selection ? this.addColumns(columns) : columns}
      >
        {children}
      </Wrap>
    );
  }
}

const DealData = Component => {
  return class NewComponent extends React.PureComponent {
    static propTypes = {
      filter: PropTypes.func,
      sort: PropTypes.func
    };
    render() {
      const { data, filter, sort } = this.props;
      let newData = filter ? data.filter(filter) : data;
      newData = sort ? newData.sort(sort) : newData;

      return <Component {...this.props} data={newData} />;
    }
  };
};

Table.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  selection: PropTypes.bool,
  value: PropTypes.array,
  onChange: PropTypes.func
};

export default ControllSwitchHoc({
  onChange: "onSelectChange",
  value: "selected",
  defaultValue: "defaultSelected"
})(DealData(Table));