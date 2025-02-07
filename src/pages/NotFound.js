import {Link} from "react-router-dom"

function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist yet.</p>
        <Link to="/" className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
          Go Back Home
        </Link>
      </div>
    );
}

export default NotFound;