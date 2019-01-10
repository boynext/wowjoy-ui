import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import None from "./None";
import { ReactComponent as Go } from "../../static/medias/svg/go.svg";

const Wrap = styled.div`
  width: 300px;
`;
const Footer = styled.div`
  background: #f5f7f8;
  font-size: 12px;
  color: #999;
  line-height: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
    path {
      fill: #999;
    }
  }
`;
const List = styled.ul`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 0;
  width: 100%;
  box-sizing: content-box;
`;
const App = styled.li`
  position: relative;
  color: #666;
  font-size: 14px;
  text-align: center;
  width: 24%;
  margin: 20px 3.5%;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 7%;
  }
  &:nth-child(3n + 1) {
    margin-left: 7%;
  }
  img {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
  }
  p {
    margin-top: 12px;
    line-height: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const TEXT = {
  viewMore: "查看更多系统 ",
  none: "暂无应用"
};

class AppList extends PureComponent {
  get TEXT() {
    const { TEXT: propTEXT } = this.props;
    if (propTEXT) {
      return {
        ...TEXT,
        ...propTEXT
      };
    }
    return TEXT;
  }
  render() {
    const { list: appList = [], viewMore } = this.props;
    const { TEXT } = this;
    return (
      <Wrap className={"wj-header-dropdown__app"}>
        {appList.length > 0 ? (
          <List>
            {appList.map((ele, index) => (
              <App
                key={index}
                onClick={ele.onClick}
                title={ele.content}
                id={ele.id}
              >
                {ele.icon}
                <p>{ele.content}</p>
              </App>
            ))}
          </List>
        ) : (
          <None>{TEXT.none}</None>
        )}

        <Footer onClick={viewMore}>
          {TEXT.viewMore}
          <Go />
        </Footer>
      </Wrap>
    );
  }
}

AppList.propTypes = {
  TEXT: PropTypes.object,
  list: PropTypes.array,
  viewMore: PropTypes.func
};

export default AppList;
