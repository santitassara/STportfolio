import { useThemeContext } from "../../context/ThemeContext";
import classes from "./ContactComponent.module.scss";

export default function ContactComponent() {
  const themeContext = useThemeContext();

  const theme = themeContext.theme;

  return (
    <div className={classes[`ContactComponent-${theme}`]} id="contact">
      <div className={classes[`ContactComponent-${theme}-text`]}>
        <span className={classes[`ContactComponent-${theme}-text-1`]}>
          Touch base
        </span>
        <span className={classes[`ContactComponent-${theme}-text-2`]}>
          With me!
        </span>
      </div>
      <div className={classes[`ContactComponent-${theme}-formDiv`]}>
        <form
          action="submit"
          className={classes[`ContactComponent-${theme}-form`]}
        >
          <input
            type="text"
            name="user-name"
            placeholder="Name"
            required
            className={classes[`ContactComponent-${theme}-form-name`]}
          />
          <input
            type="email"
            name="user-email"
            placeholder="E-mail"
            required
            className={classes[`ContactComponent-${theme}-form-email`]}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className={classes[`ContactComponent-${theme}-form-message`]}
          ></textarea>
          <div className={classes[`ContactComponent-${theme}-form-div`]}>
            <button
              className={classes[`ContactComponent-${theme}-form-div-button`]}
            >
              Send
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
