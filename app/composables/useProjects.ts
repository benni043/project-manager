import {invoke} from "@tauri-apps/api/core";
import {ref, watch} from "vue";
import type {Settings} from "~/composables/useSettings";

export type Project = {
    path: String | null
}

export async function useProjects(settings: Ref<Settings>) {
    let projects = useState<String[]>("projects");

    await callOnce(async () => {
        projects.value = await invoke("get_projects", {settings: settings.value})

        watch(settings, async value => {
            projects.value = await invoke("get_projects", {settings: settings.value})
        }, {deep: true})
    })

    return projects
}