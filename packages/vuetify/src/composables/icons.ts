// Utilities
import { computed, h, inject } from 'vue'

// Components
import { VComponentIcon } from '@/components'

// Types
import type { Component, InjectionKey, Ref } from 'vue'

export type VuetifyIcon = string | Component

export interface VuetifyIcons {
  [name: string]: VuetifyIcon
  complete: VuetifyIcon
  cancel: VuetifyIcon
  close: VuetifyIcon
  delete: VuetifyIcon
  clear: VuetifyIcon
  success: VuetifyIcon
  info: VuetifyIcon
  warning: VuetifyIcon
  error: VuetifyIcon
  prev: VuetifyIcon
  next: VuetifyIcon
  checkboxOn: VuetifyIcon
  checkboxOff: VuetifyIcon
  checkboxIndeterminate: VuetifyIcon
  delimiter: VuetifyIcon
  sort: VuetifyIcon
  expand: VuetifyIcon
  menu: VuetifyIcon
  subgroup: VuetifyIcon
  dropdown: VuetifyIcon
  radioOn: VuetifyIcon
  radioOff: VuetifyIcon
  edit: VuetifyIcon
  ratingEmpty: VuetifyIcon
  ratingFull: VuetifyIcon
  ratingHalf: VuetifyIcon
  loading: VuetifyIcon
  first: VuetifyIcon
  last: VuetifyIcon
  unfold: VuetifyIcon
  file: VuetifyIcon
  plus: VuetifyIcon
  minus: VuetifyIcon
}

export interface IconProps {
  tag: string
  set: string
  icon: VuetifyIcon
  disabled?: Boolean
  class?: unknown[]
  style?: Record<string, unknown> | null
  'aria-hidden': boolean
  type?: string
}

export interface IconSet {
  component: (props: IconProps) => Component
  aliases?: Partial<VuetifyIcons>
}

export type IconOptions = {
  defaultSet: string
  sets: Record<string, IconSet>
}

type IconInstance = {
  component: (props: IconProps) => Component
  icon: VuetifyIcon
  set: string
}

export const VuetifyIconSymbol: InjectionKey<IconOptions> = Symbol.for('vuetify:icons')

export const useIcon = (props: { icon: VuetifyIcon }) => {
  const icons = inject(VuetifyIconSymbol)

  if (!icons) throw new Error('Missing Vuetify Icons provide!')

  const icon: Ref<IconInstance> = computed(() => {
    if (typeof props.icon !== 'string') {
      return {
        component: iconProps => h(VComponentIcon, iconProps as any), // TODO: fix any
        icon: props.icon,
        set: '',
      }
    }

    const hasSet = props.icon.includes(':')
    const setName = hasSet ? props.icon.split(':')[0] : icons.defaultSet
    const iconName = hasSet ? props.icon.split(':')[1] : props.icon
    const set = icons.sets[setName ?? icons.defaultSet]

    if (!set) {
      // TODO: Throw error?
      return {
        component: () => h('div', ['error!']),
        icon: iconName,
        set: setName,
      }
    }

    let icon: VuetifyIcon = iconName

    if (iconName.startsWith('$') && set.aliases) {
      icon = set.aliases[iconName.slice(1)] ?? icon
    }

    return {
      component: set.component,
      icon,
      set: setName,
    }
  })

  return { icon }
}
