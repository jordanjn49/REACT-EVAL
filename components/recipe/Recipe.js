import { Col, Card, Badge } from "antd";
import { StarFilled } from "@ant-design/icons";
const Recipe = ({ recipe }) => {
  let description;
  if (recipe.summary.length > 72)
    description = recipe.summary.slice(0, 72) + "...";
  return (
    <Col
      key={recipe.id}
      xs={24}
      sm={12}
      md={8}
      lg={6}
      style={{ marginBottom: 16 }}
    >
      <Badge.Ribbon
        text={<span style={{ fontSize: 11 }}>Vegan-friendly</span>}
        color="#00c56f"
        style={!recipe.vegan && { display: "none" }}
      >
        <Card
          cover={<img src={recipe.image} alt={recipe.title} />}
          actions={["", "", <StarFilled key="like" />]}
        >
          <Card.Meta
            title={recipe.title}
            description={
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};
 
export default Recipe;