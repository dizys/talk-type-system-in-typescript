import {defineMonacoSetup} from '@slidev/types';

export default defineMonacoSetup(async monaco => {
  monaco.editor.onDidCreateEditor(editor => {
    editor.updateOptions({
      fontFamily: "'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace",
    });
  });
});
