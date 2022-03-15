import { NextPage } from 'next';

interface IErrorProps {
  statusCode: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res: response, err: error }) => {
  const statusCode = response
    ? response.statusCode
    : error
    ? error.statusCode
    : 404;
  return { statusCode } as IErrorProps;
};

export default Error;
