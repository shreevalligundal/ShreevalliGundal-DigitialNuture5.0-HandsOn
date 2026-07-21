import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import {

    books,
    blogs,
    courses

} from "./Data";

function App() {

    const showComponents = true;

    return (

        <div className="container">

            {

                showComponents ? (

                    <>

                        <CourseDetails courses={courses} />

                        <BookDetails books={books} />

                        <BlogDetails blogs={blogs} />

                    </>

                ) : (

                    <h2>No Data Available</h2>

                )

            }

        </div>

    );

}

export default App;