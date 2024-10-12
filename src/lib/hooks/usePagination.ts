import { usePathname, useRouter, useSearchParams } from "next/navigation";

const usePagination = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPageSize = Number(searchParams.get("size")) || 10;

  const handlePaginationChange = (page: number, pageSize: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    params.set("size", String(pageSize ?? currentPageSize));
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    currentPage,
    currentPageSize,
    handlePaginationChange,
  };
};

export default usePagination;
