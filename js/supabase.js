const supabaseConfig = {
  url: 'https://example.supabase.co',
  key: 'demo-key'
};

window.supabaseClient = {
  config: supabaseConfig,
  init() {
    console.log('Supabase inicializado para o projeto Corte Fino.');
  }
};
