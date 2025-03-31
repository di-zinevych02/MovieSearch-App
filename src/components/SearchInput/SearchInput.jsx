import css from "./SearchInput.module.css";
import { Formik, Form, Field } from "formik";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  onSearch,
  searchQuery,
  isLoading,
  error,
}) {
  return (
    <div className={css.form}>
      <Formik
        //Визначає початковий стан форми.
        //searchQuery || "" означає: якщо searchQuery є (true), то він використовується, інакше " " (порожній рядок).
        initialValues={{ searchQuery: searchQuery || "" }}
        //Дозволяє перезапускати (оновлювати) значення форми, якщо searchQuery змінюється ззовні.(наприклад, при повторному запиті), форма оновиться завдяки enableReinitialize.
        enableReinitialize
        onSubmit={onSearch}
      >
        {({ handleChange, values }) => (
          <Form className={css.searchform}>
            <Field
              type="text"
              autoComplete="on"
              autoFocus
              //ключ у values, що відповідає цьому полю
              name="searchQuery"
              className={css.input}
              placeholder="Search movies"
              //синхронізує поле з Formik state
              value={values.searchQuery}
              // обробляє зміни в полі
              onChange={handleChange}
            />
            <button type="submit" className={css.btnsearch}>
              <FaSearch />
            </button>
          </Form>
        )}
      </Formik>
      {isLoading && (
        <p className={css.loading}>Loading movies...</p>)}
      {error && (
        <p className={css.texterror}>
          Whoops there was an error, please reload the page!
        </p>
      )}
    </div>
  );
}
