import css from "./SearchInput.module.css";
import { Formik, Form, Field } from "formik";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SearchcInput({ onSearch }) {
  const handleSubmit = (values, actions) => {
    //Користувач не зможе відправити рядок, який містить лише пробіли.
    const trimmedTerm = values.searchInput.trim();

    actions.resetForm();
    if (trimmedTerm === "") {
      alert("Please enter a search term!");
      return;
    }
    onSearch(trimmedTerm); // Передаємо значення в проп onSearch
    actions.resetForm();
  };

  return (
    <div className={css.form}>
      <Formik initialValues={{ searchInput: "" }} onSubmit={handleSubmit}>
        <Form className={css.searchform}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="searchInput"
            className={css.input}
            placeholder="Search movies"
          />
          <button type="submit" className={css.btnsearch}>
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
}
