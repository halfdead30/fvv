import { useContext } from "react";
import { AppContext } from "../context";
import { I18nProvider } from "../i18n";

const ProviderWrapper = ({ children }) => {
  const { state } = useContext(AppContext);

  return <I18nProvider locale={state.locale}>{children}</I18nProvider>;
};

export default ProviderWrapper;
