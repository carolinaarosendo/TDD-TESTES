// ============================================================
// taskManager.js — Regras de negócio do gerenciador de tarefas
// ============================================================

// ------------------------------------------------------------
// Validação
// ------------------------------------------------------------

export function validateTitle(title) {
    if(typeof title !== 'string') return false;
    title = title.trim();
    if(title === null) return false;
    if(title === undefined) return false;
    if(Number.isNaN(Number(title)) === false) return false;
    if(title.length < 3) return false;
    if(title === '') return false;
    return true;
}