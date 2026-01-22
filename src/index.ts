import '@unocss/reset/tailwind.css'
import './assets/css/base.css'
import './assets/css/components.css'
import './assets/css/utilities.css'
import 'virtual:uno.css'

// Components
export { default as BaseAccordion } from './components/base-accordion.vue'
export { default as BaseAccordionItem } from './components/base-accordion-item.vue'
export {
  default as BaseAlert,
  type BaseAlertColorType,
  type BaseAlertIconType,
  type BaseAlertVariantType
} from './components/base-alert.vue'
export {
  default as BaseAvatar,
  type BaseAvatarColorType,
  type BaseAvatarShapeType
} from './components/base-avatar.vue'
export { default as BaseAvatarGroup } from './components/base-avatar-group.vue'
export {
  default as BaseBadge,
  type BaseBadgeColorType,
  type BaseBadgeVariantType
} from './components/base-badge.vue'
export {
  default as BaseBreadcrumb,
  type BaseBreadcrumbItemInterface,
  type BaseBreadcrumbSeparatoryType
} from './components/base-breadcrumb.vue'
export {
  default as BaseButton,
  type BaseButtonColorType,
  type BaseButtonShapeType,
  type BaseButtonSizeType,
  type BaseButtonVariantType
} from './components/base-button.vue'
export { default as BaseCard } from './components/base-card.vue'
export { default as BaseDivider, type BaseDividerOrientation } from './components/base-divider.vue'
export { default as BaseDropdown, type BaseDropdownPosition } from './components/base-dropdown.vue'
export { default as BaseDropdownItem } from './components/base-dropdown-item.vue'
export { default as BaseIcon } from './components/base-icon.vue'
export { default as BaseLink } from './components/base-link.vue'
export { default as BaseLoader } from './components/base-loader.vue'
export { default as BaseMask, type BaseMaskShapeType } from './components/base-mask.vue'
export { default as BaseModal, type BaseModalSizeType } from './components/base-modal.vue'
export { default as BasePagination } from './components/base-pagination.vue'
export { default as BasePdfSigner } from './components/base-pdf-signer.vue'
export {
  default as BasePopover,
  type BasePopoverPlacementType
} from './components/base-popover.vue'
export {
  default as BaseProgress,
  type BaseProgressColorType,
  type BaseProgressSizeType
} from './components/base-progress.vue'
export { default as BaseSitemap } from './components/base-sitemap.vue'
export {
  default as BaseSpinner,
  type BaseSpinnerColorType,
  type BaseSpinnerSizeType
} from './components/base-spinner.vue'
export { default as BaseStep, type BaseStepItemInterface } from './components/base-step.vue'
export { default as BaseTab } from './components/base-tab.vue'
export { default as BaseTabGroup } from './components/base-tab-group.vue'
export { default as BaseTabList } from './components/base-tab-list.vue'
export { default as BaseTabPanel } from './components/base-tab-panel.vue'
export { default as BaseTabPanels } from './components/base-tab-panels.vue'
export { default as BaseTable } from './components/base-table.vue'
export { default as BaseTimeline } from './components/base-timeline.vue'
export { default as BaseTimelineContent } from './components/base-timeline-content.vue'
export { default as BaseToast, type BaseToastColorType } from './components/base-toast.vue'
export { default as BaseTooltip } from './components/base-tooltip.vue'
export { default as BaseTreeview } from './components/base-treeview.vue'

// Forms
export { default as BaseCheckbox, type BaseCheckboxThemeType } from './components/base-checkbox.vue'
export { default as BaseChoosen } from './components/base-choosen.vue'
export {
  default as BaseDatepicker,
  type BaseDatepickerBorderType
} from './components/base-datepicker.vue'
export {
  default as BaseFileUpload,
  type BaseFileUploadBorderType
} from './components/base-file-upload.vue'
export { default as BaseForm, type BaseFormLayoutType } from './components/base-form.vue'
export { default as BaseInput, type BaseInputBorderType } from './components/base-input.vue'
export {
  default as BaseInputMask,
  type BaseInputMaskBorderType
} from './components/base-input-mask.vue'
export {
  default as BaseInputNumber,
  type BaseInputNumberBorderType
} from './components/base-input-number.vue'
export {
  default as BaseMention,
  type BaseMentionBorderType
} from './components/base-mention.vue'
export { default as BaseRadio, type BaseRadioOptionsLayout } from './components/base-radio.vue'
export { default as BaseRange } from './components/base-range.vue'
export {
  default as BaseSelect,
  type BaseSelectBorderType,
  type BaseSelectOptionInterface
} from './components/base-select.vue'
export {
  default as BaseSwitch,
  type BaseSwitchSize,
  type BaseSwitchTextPosition
} from './components/base-switch.vue'
export {
  default as BaseTextarea,
  type BaseTextareaBorderType
} from './components/base-textarea.vue'

// Global Plugin
export { default as PluginBaseComponents } from './plugins/base'
export { default as PluginIcon } from './plugins/icon'
export { default as PluginInputMask } from './plugins/input-mask'
export { default as PluginTooltip } from './plugins/tooltip'

// Utilities
export { useDarkMode } from './composable/dark-mode'
export { emitter, EventEmitter } from './composable/emitter'
export { useMobileBreakpoint } from './composable/mobile-breakpoint'
export { useNumeric } from './composable/numeric'
export { useScreenSize } from './composable/screen-size'
export { useSidebar } from './composable/sidebar'
export { useScreenBreakpointStore } from './stores/screen-breakpoint'
export { useSidebarStore } from './stores/sidebar'
export type { IAppMenu, IMenu, IStateMenu, ISubmenu } from './stores/sidebar-menu'
export { useSidebarMenuStore } from './stores/sidebar-menu'
export { useWebsocketStore } from './stores/websocket'

// Layout Components
export { default as AppFooter } from './components/app-footer.vue'
export { default as AppHeader } from './components/app-header.vue'
export { default as AppPreloader } from './components/app-preloader.vue'
export { default as AppSidebar } from './components/app-sidebar.vue'
export { default as AppSidebarMenu } from './components/app-sidebar-menu.vue'
export { default as AppSidebarPanel } from './components/app-sidebar-panel.vue'

// Header Components
export { default as HeaderMenu } from './components/header-menu.vue'
export { default as HeaderMenuAccount } from './components/header-menu-account.vue'
export { default as HeaderMenuDarkMode } from './components/header-menu-dark-mode.vue'
export { default as HeaderMenuSignout } from './components/header-menu-signout.vue'
export { default as HeaderMenuSwitchOrganization } from './components/header-menu-switch-organization.vue'
export { default as HeaderNotification } from './components/header-notification.vue'
export { default as HeaderSidebarButton } from './components/header-sidebar-button.vue'
