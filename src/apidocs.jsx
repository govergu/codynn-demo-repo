import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
const ApiDocs = () => {
  return (
    <div>
      <h1>API Documentation</h1>
      <SwaggerUI url="https://interview-mock-api.onrender.com/api-docs/#/"></SwaggerUI>
    </div>
  );
};

export default ApiDocs;
