// @flow

import color from 'color';
import {Platform, Dimensions, PixelRatio} from 'react-native';
import {colorApp} from '../../styles/app';

import {PLATFORM} from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = PLATFORM.MATERIAL;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: colorApp.primary,
  iconStyle: colorApp.main,
  contentStyle: colorApp.text.text,
  expandedIconStyle: colorApp.secondary,
  accordionBorderColor: colorApp.primary,

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: colorApp.secondary,
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: colorApp.text.link,

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: colorApp.alert,
  badgeColor: colorApp.secondary,
  badgePadding: 0,

  // Button
  buttonFontFamily: 'Roboto',
  buttonDisabledBg: colorApp.disable,
  buttonPadding: 6,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: colorApp.text.background,
  cardBorderColor: colorApp.primary,
  cardBorderRadius: 2,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: colorApp.text.light,
  checkboxSize: 20,
  checkboxTickColor: colorApp.text.text,

  // Color
  brandPrimary: colorApp.primary,
  brandInfo: colorApp.info,
  brandSuccess: colorApp.add,
  brandDanger: colorApp.delete,
  brandWarning: colorApp.alert,
  brandDark: colorApp.main,
  brandLight: colorApp.mainLight,

  // Container
  containerBgColor: colorApp.text.background,

  // Date Picker
  datePickerTextColor: colorApp.text,
  datePickerBg: 'transparent',

  // FAB
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: colorApp.primary,
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: colorApp.text.text,
  tabBarTextSize: 11,
  activeTab: colorApp.primary,
  sTabBarActiveTextColor: colorApp.text.text,
  tabBarActiveTextColor: colorApp.text.text,
  tabActiveBgColor: colorApp.primary,

  // Header
  toolbarBtnColor: colorApp.text.text,
  toolbarDefaultBg: colorApp.text.background,
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: colorApp.text.text,
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 40 : 50,
  toolbarBtnTextColor: colorApp.text.text,
  toolbarDefaultBorder: colorApp.primary,
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: 28,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: colorApp.primary,
  inputSuccessBorderColor: colorApp.add,
  inputErrorBorderColor: colorApp.delete,
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return colorApp.text.light;
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: 'transparent',
  listBorderColor: colorApp.primary,
  listDividerBg: colorApp.primary,
  listBtnUnderlayColor: colorApp.secondary,
  listItemPadding: 12,
  listNoteColor: colorApp.text.text,
  listNoteSize: 13,
  listItemSelected: colorApp.primary,

  // Progress Bar
  defaultProgressColor: colorApp.alert,
  inverseProgressColor: colorApp.delete,

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: colorApp.primary,
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: colorApp.text.background,
  segmentActiveBackgroundColor: colorApp.primary,
  segmentTextColor: colorApp.text.text,
  segmentActiveTextColor: colorApp.text.light,
  segmentBorderColor: colorApp.primary,
  segmentBorderColorMain: colorApp.primary,

  // Spinner
  defaultSpinnerColor: colorApp.add,
  inverseSpinnerColor: colorApp.primary,

  // Tab
  tabDefaultBg: colorApp.text.background,
  topTabBarTextColor: colorApp.text.text,
  topTabBarActiveTextColor: colorApp.text.light,
  topTabBarBorderColor: colorApp.primary,
  topTabBarActiveBorderColor: colorApp.primary,

  // Tabs
  tabBgColor: colorApp.text.background,
  tabFontSize: 15,

  // Text
  textColor: colorApp.text.text,
  inverseTextColor: colorApp.text.light,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'Roboto',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: colorApp.text.text,
  titleFontColor: colorApp.text.text,

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: colorApp.text.link,
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
