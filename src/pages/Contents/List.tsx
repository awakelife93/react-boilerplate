import _ from "lodash";
import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { CSSProperties } from "styled-components";
import { ContentsIE } from "../../api/GetAPI/interface";
import { ScrollPaging } from "../../common/components";
import { CommonImage } from "../../common/styles";

const gridItem = (
  item: ContentsIE,
  index: number,
  style: CSSProperties,
  goDetail: Function
): React.ReactElement => {
  const imageUrl: string = item.contImageLink ?? CommonImage.FREE_IMAGE1;

  return (
    <Card
      key={`Contents_item_key${index}`}
      style={{ cursor: "pointer" }}
      onClick={() => goDetail(item)}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body style={{ backgroundColor: style.backgroundColor }}>
        <Card.Title style={{ color: style.color }}>{item.contTitle}</Card.Title>
        <Card.Subtitle style={{ color: style.color }}>
          {item.contSubTitle}
        </Card.Subtitle>
        <Card.Text style={{ color: style.color }}>{item.contDesc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const List = ({
  style,
  contents,
  skip,
  getContents,
  goDetail,
}: {
  style: CSSProperties;
  contents: ContentsIE[];
  getContents: Function;
  goDetail: Function;
  skip: number;
}): React.ReactElement => {
  return (
    <CardColumns>
      {!_.isEmpty(contents) &&
        contents.map((card: ContentsIE, index: number) => {
          if (index + 1 === contents.length) {
            return (
              <ScrollPaging
                key={`ScrollPaging_Contents_Key_${index}`}
                target={{
                  skip,
                  callback: getContents,
                }}
              >
                {gridItem(card, index, style, goDetail)}
              </ScrollPaging>
            );
          }
          return gridItem(card, index, style, goDetail);
        })}
    </CardColumns>
  );
};

export default React.memo(List);
