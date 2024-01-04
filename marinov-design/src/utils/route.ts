import router from "next/router";

export const handleRoute = (value: string) => {
    console.log('button clicked')
    router.push(`/${value}`);
  };