import { ContentsType } from "@/api/GetAPI/type";
import { ScrollPaging } from "@/common/components";
import CommonImageResources from "@/common/styles/image";
import _ from "lodash";
import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { CSSProperties } from "styled-components";

const gridItem = (
  item: ContentsType,
  index: number,
  style: CSSProperties,
  goDetail: Function
): React.ReactElement => {
  const imageUrl: string = item.imageLink ?? CommonImageResources.FREE_IMAGE1;

  return (
    <Card
      key={`Contents_item_key${index}`}
      style={{ cursor: "pointer" }}
      onClick={() => goDetail(item)}
    >
      <Card.Img variant="top" src={imageUrl} alt={`Thumbnail Image ${index}`} />
      <Card.Body style={{ backgroundColor: style.backgroundColor }}>
        <Card.Title style={{ color: style.color }}>{item.title}</Card.Title>
        <Card.Subtitle style={{ color: style.color }}>
          {item.subTitle}
        </Card.Subtitle>
        <Card.Text style={{ color: style.color }}>{item.description}</Card.Text>
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
  contents: ContentsType[];
  getContents: Function;
  goDetail: Function;
  skip: number;
}): React.ReactElement => {
  return (
    <CardColumns>
      {!_.isEmpty(contents) &&
        contents.map((card: ContentsType, index: number) => {
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

export default List;
