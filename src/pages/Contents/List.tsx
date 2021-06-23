import _ from "lodash";
import { Card, CardColumns } from "react-bootstrap";
import { ContentsIE } from "../../api/GetAPI/interface";
import { ScrollPaging } from "../../common/components";

const gridItem = (item: ContentsIE, index: number, style: any) => {
  return (
    <Card key={`Contents_item_key${index}`}>
      <Card.Img variant="top" src={item.imageLink} />
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

export default (props: any) => {
  const { contents, skip, getContents } = props;

  return (
    <CardColumns>
      {!_.isEmpty(contents) &&
        contents.map((card: ContentsIE, index: number) => {
          if (index + 1 === contents.length) {
            return (
              <ScrollPaging
                key={`ScrollPaging_Contents_Key_${index}`}
                option={{
                  target: {
                    skip,
                    callback: getContents,
                  },
                }}
              >
                {gridItem(card, index, props.style)}
              </ScrollPaging>
            );
          }
          return gridItem(card, index, props.style);
        })}
    </CardColumns>
  );
};
