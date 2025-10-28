import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import { colors } from "src/constants/theme";

function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorBgBase: colors.inputColor,
          colorBorder: colors.gray3,
          colorText: colors.gray6,
          colorTextPlaceholder: colors.gray4,
          fontSize: 16,
          fontFamily: "Inter",
        },
        components: {
          Input: {
            borderRadius: 12,
            controlHeight: 44,
            fontSize: 15,
            paddingInline: 18,
          },
          DatePicker: {
            borderRadius: 12,
            controlHeight: 44,
            fontSize: 15,
            paddingInline: 18,
          },
          Select: {
            //   borderRadius: 12,
            //   controlHeight: 44,
            //   fontSize: 15,
            optionPadding: "8px 10px",
          },
          Form: {
            labelFontSize: 14,
          },
          Breadcrumb: {
            itemColor: colors.primary,
            separatorColor: colors.black,
            linkColor: colors.black,
            separatorMargin: 6,
            fontSize: 16,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
