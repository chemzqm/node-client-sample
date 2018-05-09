import { Plugin, Autocmd } from 'neovim'

@Plugin({dev: true})
export default class CompletePlugin {

  @Autocmd('VimEnter', {
    sync: false,
    pattern: '*'
  })
  public async onVimEnter(): Promise<void> {
  }
}
