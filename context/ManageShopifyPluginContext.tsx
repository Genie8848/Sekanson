"use client";

import { useFormik, FormikProvider, Form, Formik, FormikHelpers, FormikConfig, FormikProps, FormikValues } from "formik";
import * as Yup from 'yup';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ApplicationType } from "../types/applications";
import { WithChildren } from "../types/common";

interface IContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<any>>;
  application: ApplicationType;
  setApplication: Dispatch<SetStateAction<ApplicationType>>;
  handleChangeApplication: (input: { type: string, value: any }) => void,
  formik?: FormikProps<FormikValues>

}

export const ManageShopifyPluginContext = createContext<IContextProps>({
  loading: false,
  setLoading: () => { },
  application: {},
  setApplication: () => { },
  handleChangeApplication: () => { },
});


type ManageShopifyPluginStateProps = {
  loading: boolean;
  application: ApplicationType;
};

interface LayoutProps extends WithChildren {
  pluginData: ManageShopifyPluginStateProps;
}

export function ManageShopifyPluginContextWrapper({
  pluginData,
  children,
}: LayoutProps) {
  const [loading, setLoading] = useState(pluginData.loading);
  const [application, setApplication] = useState<ApplicationType>(pluginData.application)

  const handleChangeApplication = ({ type, value }: { type: string, value: any }) => {
    setLoading(true)
    setTimeout(() => {
      formik.setFieldValue(type, value)
      // setApplication((prev: ApplicationType) => ({ ...prev, [type]: value }))
      setLoading(false)
    }, 10);
  }
  const validationSchema = Yup.object({
    shopURL: Yup.string()
      .required('shopURL cannot be empty'),
    url: Yup.string()
      .required('url cannot be empty'),
    shopifyAPIKey: Yup.string()
      .required('shopifyAPIKey cannot be empty'),
    desiredBalance: Yup.string()
      .min(1, "desiredBalance cannot be less than 1")
      .required('desiredBalance cannot be empty'),

  })
  const formik = useFormik({
    initialValues: pluginData.application,
    validationSchema,
    onSubmit: (
      values: ApplicationType,
      { setSubmitting }
      // { setSubmitting }: FormikHelpers<ApplicationType>
    ) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }
  })

  let sharedState: IContextProps = useMemo(
    () => ({
      loading,
      setLoading,
      application,
      setApplication,
      handleChangeApplication,
      formik
    }),
    [loading, { ...application }]
  );

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <ManageShopifyPluginContext.Provider value={sharedState} >
          {children}
        </ManageShopifyPluginContext.Provider >
      </form>
    </FormikProvider>
  );
}

export const useManageShopifyPluginContext = () => {
  return useContext(ManageShopifyPluginContext);
};
