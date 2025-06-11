import { useState } from "react";

export default function AddGameForm({ onAddGame }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [touched, setTouched] = useState({
    title: false,
    description: false,
    category: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "title":
        if (value.length < 3) {
          return "Название должно содержать минимум 3 символа";
        }
        if (value.length > 50) {
          return "Название не должно превышать 50 символов";
        }
        return "";
      case "description":
        if (value.length < 10) {
          return "Описание должно содержать минимум 10 символов";
        }
        if (value.length > 500) {
          return "Описание не должно превышать 500 символов";
        }
        return "";
      case "category":
        if (!value) {
          return "Выберите категорию";
        }
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {
      title: validateField("title", formData.title),
      description: validateField("description", formData.description),
      category: validateField("category", formData.category),
    };

    setErrors(newErrors);
    setTouched({
      title: true,
      description: true,
      category: true,
    });


    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      onAddGame(formData);
      setFormData({ title: "", description: "", category: "" });
      setErrors({ title: "", description: "", category: "" });
      setTouched({ title: false, description: false, category: false });
    }
  };

  const getInputClassName = (name) => {
    return `form-input ${touched[name] && errors[name] ? "error" : ""} ${
      touched[name] && !errors[name] ? "success" : ""
    }`;
  };

  return (
    <div className="add-game-form">
      <h2>Добавить новую игру</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Название игры:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("title")}
            placeholder="Введите название игры"
          />
          {touched.title && errors.title && (
            <div className="error-message">{errors.title}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Описание:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("description")}
            rows="4"
            placeholder="Введите описание игры"
          />
          {touched.description && errors.description && (
            <div className="error-message">{errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Категория:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("category")}
          >
            <option value="">Выберите категорию</option>
            <option value="MOBA">MOBA</option>
            <option value="Шутер">Шутер</option>
          </select>
          {touched.category && errors.category && (
            <div className="error-message">{errors.category}</div>
          )}
        </div>

        <button type="submit" className="form-button">
          Добавить игру
        </button>
      </form>
    </div>
  );
}
