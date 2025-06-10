import { Helmet } from "react-helmet-async";

const Title = ({ children }) => (
  <Helmet>
    <title>{children} | ServiceNow</title>
  </Helmet>
);

export default Title;
