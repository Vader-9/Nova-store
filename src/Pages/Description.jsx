import { useParams } from "react-router-dom";

function Description() {

    const { id } = useParams();

  return (
    <div>
      <h1>Description Page</h1>
      <p>This is the description page of our application.</p>
    </div>
  );
}

export default Description;