import { ButtonProps, ConfigProvider } from "antd";
import { MarginTypes } from "src/constants/theme";
import styles from "./button.module.scss";

type CombinedProps = ButtonProps & MarginTypes;

interface Props extends Omit<CombinedProps, "type"> {
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  bg?: string;
  width?: React.CSSProperties["width"];
  height?: number;
  borderColor?: React.CSSProperties["borderColor"];
  textColor?: React.CSSProperties["color"];
  borderRadius?: React.CSSProperties["borderRadius"];
  type?: "primary" | "default" | "dashed" | "text" | "link" | "delete";
  backgroundColor?: string;
  customName?: "primary" | "default" | "delete";
}
export default function CustomButton({
  type,
  // backgroundColor,
  // customName,
  bg,
  width,
  height = 54,
  borderColor,
  textColor,
  borderRadius = 25,
  fontWeight = 500,
  fontSize = 20,
  m,
  mt,
  mb,
  ml,
  mr,
  style,

  ...rest
}: Props) {
  // const colors = useTypedSelector((state) => state.layout.colors);

  // const giveColors = () => {
  //   if (customName === "primary") {
  //     return {
  //       textColor: "white",
  //       borderColor: colors.black,
  //       backgroundColor: colors.primary,
  //     };
  //     // } else if (customName === 'default') {
  //     //   return {
  //     //     backgroundColor: colors.background,
  //     //     textColor: colors.colorText,
  //     //     borderColor: colors.colorText,
  //     //   };
  //     // } else if (customName === 'delete') {
  //     //   return {
  //     //     backgroundColor: colors.colorDelete,
  //     //     textColor: colors.colorError,
  //     //     borderColor: 'transparent',
  //     //   };
  //     // } else {
  //     //   return {
  //     //     backgroundColor: 'transparent',
  //     //     textColor: colors.colorText,
  //     //     borderColor: 'transparent',
  //     //   };
  //   }
  // };
  // const {
  //   backgroundColor: background,
  //   textColor: colortext,
  //   borderColor: bordertext,
  // } = giveColors();

  return (
    <ConfigProvider
    // theme={{
    //   token: {
    //     colorBgBase: customName ? background : backgroundColor,
    //     colorBorder: customName ? bordertext : borderColor,
    //   },
    //   components: {
    //     Button: {
    //       controlHeight: height,
    //       paddingContentHorizontal: 30,
    //       colorText: customName ? colortext : textColor,
    //     },
    //   },
    // }}
    >
      <button
        className={styles.button}
        {...rest}
        style={{
          color: textColor,
          width,
          height,
          borderRadius,
          margin: m,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          boxShadow: "none",
          backgroundColor: bg,
          border: `2px solid ${borderColor}`,
          fontSize,
          fontWeight,

          ...style,
        }}
      />
    </ConfigProvider>
  );
}
