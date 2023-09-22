import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './TaskItem.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'completed'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_2 = __VLS_1({ ...{ onClick: {} as any, }, class: (({ completed: __VLS_ctx.completed })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: (({ completed: __VLS_ctx.completed })), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
__VLS_styleScopedClasses = ({ completed: completed });
let __VLS_4 = { 'click': __VLS_pickEvent(__VLS_3.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onClick) };
__VLS_4 = {
click: (__VLS_ctx.toggleCompleted)
};
(__VLS_ctx.capitalize | __VLS_ctx.text);
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_7 = __VLS_6({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9 = { 'click': __VLS_pickEvent(__VLS_8.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onClick) };
__VLS_9 = {
click: (__VLS_ctx.deleteTask)
};
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[completed, completed, toggleCompleted, capitalize, text, deleteTask,];
return __VLS_slots;
}
