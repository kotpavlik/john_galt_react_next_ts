import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404 </h1>
            <p>Please <Link href={"/"}> go to back</Link></p>
        </div>
    );
};

export default ErrorPage;