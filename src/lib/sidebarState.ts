export const SIDEBAR_MODULE_KEY = 'fisi_sidebar_expanded_module'

export function validStoredModule(value: string | null, validSlugs: string[]) {
  return value && validSlugs.includes(value) ? value : null
}
