import React, { memo, FC, useState } from "react";
import { useGetPostsQuery } from "../../../../store/feature/posts/post-api.slice";

type PostsContainerClientProps = {};

const PostsContainerClient: FC<PostsContainerClientProps> = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10);
  const options = [5, 10, 20, 30];

  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetPostsQuery(numberOfQuotes);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <h3>Select the Quantity of Quotes to Fetch:</h3>
        <select
          value={numberOfQuotes}
          onChange={(e) => {
            setNumberOfQuotes(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.map(({ id, title, views }) => (
          <blockquote key={id}>
            &ldquo;{title}&rdquo;
            <footer>
              <cite>{views}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};

export default memo(PostsContainerClient);
