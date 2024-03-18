import { stratagems } from '@/app/stratagems';

export async function GET(request: Request) {
  return Response.json(stratagems);
}
