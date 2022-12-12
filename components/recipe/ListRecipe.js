import React from "react";
import Recipe from "./Recipe";
import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Row } from "antd";

const ListRecipe = ({ data }) => {
  // Déclencher à un effet dépendant de data
  // Vérifier si data existe ou pas
  // Afficher un loading le temps de récupérer data
  // Cet effet va charger data dans un state

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      // if (data?.length > 0)
      setLoading(true);
      setState(data);
    } else console.log("Error : No data found");
  }, [data]);

  useEffect(() => {
    if (state && state.length > 0) setTimeout(() => setLoading(false), 2000);
  }, [state]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          backgroundColor: "white",
        }}
      >
        <LoadingOutlined />
      </div>
    );
  return (
    <Row style={{ padding : 32 }} gutter={16}>
        {state.map((item) => (
            <Recipe recipe={item} key={item.id} />
        ))}
    </Row>
    );
};

export default ListRecipe;
