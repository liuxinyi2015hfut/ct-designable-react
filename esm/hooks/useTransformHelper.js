import { useOperation } from './useOperation';
export var useTransformHelper = function (workspaceId) {
    var operation = useOperation(workspaceId);
    return operation === null || operation === void 0 ? void 0 : operation.transformHelper;
};