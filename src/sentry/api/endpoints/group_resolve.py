from django.utils import timezone
from django.utils.decorators import method_decorator

from sentry.api.base import Endpoint
from sentry.constants import STATUS_RESOLVED
from sentry.models import Group, Activity
from sentry.web.decorators import has_access

from rest_framework.response import Response


class GroupResolveEndpoint(Endpoint):
    @method_decorator(has_access)
    def post(self, request, team, project, group_id):
        group = Group.objects.get(
            id=group_id,
            project=project,
        )
        now = timezone.now()

        group.resolved_at = now

        happened = Group.objects.filter(
            id=group.id,
        ).exclude(status=STATUS_RESOLVED).update(
            status=STATUS_RESOLVED,
            resolved_at=now,
        )

        if happened:
            Activity.objects.create(
                project=project,
                group=group,
                type=Activity.SET_RESOLVED,
                user=request.user,
            )

        return Response()
