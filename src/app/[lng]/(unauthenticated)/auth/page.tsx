import { PageParams } from "~/app/@types/parameters";
import { useTranslation } from "~/app/i18n";
import { Button } from "~/ui/button";
import { Switch } from "~/ui/switch";

export default async function Home({
  params: { lng },
}: {
  params: PageParams;
}) {
  const { t } = await useTranslation({
    lng,
  });

  return (
    <main className="mx-auto grid gap-2 w-max p-10">
      <p>Hello</p>
      <Button variant="brand">{t("title")}</Button>
      <Switch />
    </main>
  );
}
