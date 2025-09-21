import { type App } from 'vue'

// Layout Components
import AppFooter from '@/components/app-footer.vue'
import AppHeader from '@/components/app-header.vue'
import AppPreloader from '@/components/app-preloader.vue'
import AppSidebar from '@/components/app-sidebar.vue'
import AppSidebarMenu from '@/components/app-sidebar-menu.vue'
import AppSidebarPanel from '@/components/app-sidebar-panel.vue'
// Base Components
import BaseAccordion from '@/components/base-accordion.vue'
import BaseAccordionItem from '@/components/base-accordion-item.vue'
import BaseAlert from '@/components/base-alert.vue'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseAvatarGroup from '@/components/base-avatar-group.vue'
import BaseBadge from '@/components/base-badge.vue'
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseButton from '@/components/base-button.vue'
import BaseCard from '@/components/base-card.vue'
import BaseCheckbox from '@/components/base-checkbox.vue'
import BaseChoosen from '@/components/base-choosen.vue'
import BaseDatepicker from '@/components/base-datepicker.vue'
import BaseDivider from '@/components/base-divider.vue'
import BaseDropdown from '@/components/base-dropdown.vue'
import BaseDropdownItem from '@/components/base-dropdown-item.vue'
import BaseFileUpload from '@/components/base-file-upload.vue'
import BaseForm from '@/components/base-form.vue'
import BaseIcon from '@/components/base-icon.vue'
import BaseInput from '@/components/base-input.vue'
import BaseInputMask from '@/components/base-input-mask.vue'
import BaseInputNumber from '@/components/base-input-number.vue'
import BaseLink from '@/components/base-link.vue'
import BaseLoader from '@/components/base-loader.vue'
import BaseMask from '@/components/base-mask.vue'
import BaseMention from '@/components/base-mention.vue'
import BaseModal from '@/components/base-modal.vue'
import BasePagination from '@/components/base-pagination.vue'
import BasePopover from '@/components/base-popover.vue'
import BaseProgress from '@/components/base-progress.vue'
import BaseRadio from '@/components/base-radio.vue'
import BaseRange from '@/components/base-range.vue'
import BaseSelect from '@/components/base-select.vue'
import BaseSitemap from '@/components/base-sitemap.vue'
import BaseSpinner from '@/components/base-spinner.vue'
import BaseStep from '@/components/base-step.vue'
import BaseSwitch from '@/components/base-switch.vue'
import BaseTab from '@/components/base-tab.vue'
import BaseTabGroup from '@/components/base-tab-group.vue'
import BaseTabList from '@/components/base-tab-list.vue'
import BaseTabPanel from '@/components/base-tab-panel.vue'
import BaseTabPanels from '@/components/base-tab-panels.vue'
import BaseTable from '@/components/base-table.vue'
import BaseTextarea from '@/components/base-textarea.vue'
import BaseTimeline from '@/components/base-timeline.vue'
import BaseTimelineContent from '@/components/base-timeline-content.vue'
import BaseToast from '@/components/base-toast.vue'
import BaseTooltip from '@/components/base-tooltip.vue'
import BaseTreeview from '@/components/base-treeview.vue'
// Header Components
import HeaderMenu from '@/components/header-menu.vue'
import HeaderMenuAccount from '@/components/header-menu-account.vue'
import HeaderMenuDarkMode from '@/components/header-menu-dark-mode.vue'
import HeaderMenuSignout from '@/components/header-menu-signout.vue'
import HeaderMenuSwitchOrganization from '@/components/header-menu-switch-organization.vue'
import HeaderNotification from '@/components/header-notification.vue'
import HeaderSidebarButton from '@/components/header-sidebar-button.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PluginBaseComponents: any = {
  install(app: App) {
    app.component('AppFooter', AppFooter)
    app.component('AppHeader', AppHeader)
    app.component('AppPreloader', AppPreloader)
    app.component('AppSidebar', AppSidebar)
    app.component('AppSidebarMenu', AppSidebarMenu)
    app.component('AppSidebarPanel', AppSidebarPanel)
    app.component('BaseAccordion', BaseAccordion)
    app.component('BaseAccordionItem', BaseAccordionItem)
    app.component('BaseAlert', BaseAlert)
    app.component('BaseAvatar', BaseAvatar)
    app.component('BaseAvatarGroup', BaseAvatarGroup)
    app.component('BaseBadge', BaseBadge)
    app.component('BaseBreadcrumb', BaseBreadcrumb)
    app.component('BaseButton', BaseButton)
    app.component('BaseCard', BaseCard)
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('BaseChoosen', BaseChoosen)
    app.component('BaseDatepicker', BaseDatepicker)
    app.component('BaseDivider', BaseDivider)
    app.component('BaseDropdown', BaseDropdown)
    app.component('BaseDropdownItem', BaseDropdownItem)
    app.component('BaseFileUpload', BaseFileUpload)
    app.component('BaseForm', BaseForm)
    app.component('BaseIcon', BaseIcon)
    app.component('BaseInput', BaseInput)
    app.component('BaseInputMask', BaseInputMask)
    app.component('BaseInputNumber', BaseInputNumber)
    app.component('BaseLink', BaseLink)
    app.component('BaseLoader', BaseLoader)
    app.component('BaseMask', BaseMask)
    app.component('BaseMention', BaseMention)
    app.component('BaseModal', BaseModal)
    app.component('BasePagination', BasePagination)
    app.component('BasePopover', BasePopover)
    app.component('BaseProgress', BaseProgress)
    app.component('BaseRadio', BaseRadio)
    app.component('BaseRange', BaseRange)
    app.component('BaseSelect', BaseSelect)
    app.component('BaseSitemap', BaseSitemap)
    app.component('BaseSpinner', BaseSpinner)
    app.component('BaseStep', BaseStep)
    app.component('BaseSwitch', BaseSwitch)
    app.component('BaseTab', BaseTab)
    app.component('BaseTabGroup', BaseTabGroup)
    app.component('BaseTabList', BaseTabList)
    app.component('BaseTabPanel', BaseTabPanel)
    app.component('BaseTabPanels', BaseTabPanels)
    app.component('BaseTable', BaseTable)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseTimeline', BaseTimeline)
    app.component('BaseTimelineContent', BaseTimelineContent)
    app.component('BaseToast', BaseToast)
    app.component('BaseTooltip', BaseTooltip)
    app.component('BaseTreeview', BaseTreeview)
    app.component('HeaderMenu', HeaderMenu)
    app.component('HeaderMenuAccount', HeaderMenuAccount)
    app.component('HeaderMenuDarkMode', HeaderMenuDarkMode)
    app.component('HeaderMenuSignout', HeaderMenuSignout)
    app.component('HeaderMenuSwitchOrganization', HeaderMenuSwitchOrganization)
    app.component('HeaderNotification', HeaderNotification)
    app.component('HeaderSidebarButton', HeaderSidebarButton)
  }
}

export default PluginBaseComponents
